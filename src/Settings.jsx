import React, { useContext } from "react";

export const SettingsContext = React.createContext();

export function Settings() {
  const { settings, setSettings } = useContext(SettingsContext);
  return <div style={{marginBottom: '1em'}}>
    {!settings.embed && <h2>Settings</h2>}
    <label>
      Align data
      <input type="checkbox" value="1" checked={settings.alignData}
        onChange={(evt) => {
          const alignData = evt.target.checked;
          return setSettings(settings => ({ ...settings, alignData }));
        }} />
    </label>
    <br />
    <label>
      Font size{" "}
      <input type="number" value={settings.fontSize}
        onChange={(evt) => {
          const fontSize = parseInt(evt.target.value);
          return setSettings(settings => ({ ...settings, fontSize }));
        }} />
    </label>
    {!settings.embed && <p>
      You can add support for your own chips by editing{" "}
      <a href="https://github.com/cmfcmf/ic-pinout-diagram-generator/blob/master/src/chips.js">src/chips.js</a>.
      Please contribute new chip definitions as pull requests!
    </p>}
  </div>;
}
