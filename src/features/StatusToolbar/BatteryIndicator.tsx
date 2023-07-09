import { useState, useEffect } from 'react';
import clsx from 'clsx';

// * components
import Tooltip from '../../components/Tooltip';

// * utils
import { formatSeconds } from '../../helpers/utils';

// * types
type Battery = {
  level: number;
  charging: boolean;
  chargingTime: number;
  dischargingTime: number;
  addEventListener: Function;
  removeEventListener: Function;
};

const BatteryIndicator = () => {
  const [batteryLevel, setBatteryLevel] = useState<number>(0);
  const [charging, setCharging] = useState<boolean>(false);
  const [chargingTime, setChargingTime] = useState<number>(0);
  const [dischargingTime, setDischargingTime] = useState<number>(0);
  const [isSupported, setIsSupported] = useState<boolean>(true);

  useEffect(() => {
    if (!('getBattery' in navigator)) {
      setIsSupported(false);
      return;
    }

    const events = ['levelchange', 'chargingchange', 'chargingtimechange', 'dischargingtimechange'];
    let battery: Battery;

    const updateBatteryInfo = (battery: Battery) => {
      setBatteryLevel(battery.level);
      setCharging(battery.charging);
      setChargingTime(battery.chargingTime);
      setDischargingTime(battery.dischargingTime);
    };

    // @ts-ignore
    navigator.getBattery().then((batteryObj: Battery) => {
      battery = batteryObj;
      updateBatteryInfo(battery);
      events.forEach(evt =>
        battery.addEventListener(evt, (e: { target: Battery }) => updateBatteryInfo(e.target))
      );
    });

    return () => {
      if (battery) {
        events.forEach(evt => battery.removeEventListener(evt, updateBatteryInfo));
      }
    };
  }, []);

  if (!isSupported) return null;

  return (
    <Tooltip
      content={
        <>
          <span>Charging Time : {formatSeconds(chargingTime)}</span>
          <span>Discharging Time : {formatSeconds(dischargingTime)}</span>
        </>
      }
    >
      <div className='battery-indicator flex items-center gap-x-2'>
        <span
          className={clsx(
            'material-symbols-outlined text-2xl sm:mt-0.5',
            !charging && batteryLevel < 0.2 && 'rotate-90 animate-pulse',
            !charging && batteryLevel >= 0.2 && 'rotate-180',
            charging && 'rotate-90'
          )}
        >
          {!charging &&
            clsx(
              batteryLevel < 0.2 && 'battery_alert',
              batteryLevel >= 0.2 && batteryLevel < 0.4 && 'battery_low',
              batteryLevel >= 0.4 && batteryLevel < 0.65 && 'battery_horiz_050',
              batteryLevel >= 0.65 && batteryLevel < 0.95 && 'battery_horiz_075',
              batteryLevel >= 0.95 && 'battery_full_alt'
            )}
          {charging && 'battery' && 'battery_charging_50'}
        </span>
        <span>{(batteryLevel * 100).toFixed(0)}%</span>
      </div>
    </Tooltip>
  );
};

export default BatteryIndicator;
