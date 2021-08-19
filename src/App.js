import * as React from "react";
import { Switch } from "./switch";
import {
  SettingRow,
  SettingRowContent,
  SettingRowActions,
  SettingRowTitle,
} from "./settingRow";
import { ToggleContext, useToggleContext } from "./toggleContext";

function Toggler({ children }) {
  // todo, implement this re-usable component.
  const [on, setOn] = React.useState(false)
  const toggle = React.useCallback(() => setOn(oldState => !oldState), [])
  const value = React.useMemo(() => ({on, toggle}), [on])
  return (
    <ToggleContext.Provider value={value}>
      {children}
    </ToggleContext.Provider>
  );
}

function TogglerOn({ children }) {
  // todo, implement this re-usable component.
  const { on } = useToggleContext()
  return on ? children : null;
}

function TogglerOff({ children }) {
  // todo, implement this re-usable component.
  const { on } = useToggleContext()
  return !on ? children : null;
}

function TogglerButton(props) {
  // todo, implement this re-usable component.
  const { on, toggle } = useToggleContext()
  return <Switch on={on} onClick={toggle} {...props} />;
}

function App() {
  return (
    <SettingRow>
      <Toggler>
        <SettingRowContent>
          <SettingRowTitle>Some setting</SettingRowTitle>
          <TogglerOn>Is enabled</TogglerOn>
          <TogglerOff>Is disabled</TogglerOff>
        </SettingRowContent>
        <SettingRowActions>
          <TogglerButton />
        </SettingRowActions>
      </Toggler>
    </SettingRow>
  );
}

export default App;
