import Body from './components/Body.js'
import appStore from "./redux/appStore.js"
import { Provider } from "react-redux"

function App() {
  return (
    <Provider store={appStore}>
      <Body/>
    </Provider>
  );
}

export default App;
