import './App.css';
import { translations } from './constant';
import dailyTipData from "./data/dailyTips.json";

function App() {

  //params
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries()) || {};
  const keyParam = params['key'];
  const indexParam = params['index'];
  const langParam = params['lang'];

  //data
  let data;
  if (keyParam && langParam && indexParam) {
    data = dailyTipData[keyParam][langParam][indexParam];
  }

  if (!data) {
    return null;
  }


  return (
    <div dir={langParam === 'ar' ? 'rtl' : 'ltr'}>
      <div>
        <img
          src={data.image}
          width={'100%'}
        />
        <div style={{
          display: 'flex',
          margin: '12px 16px'
        }}>
          <p className="dailytip">{translations['DAY_TIP'][langParam]}</p>
          <div className="tipDate"><p style={{ margin: 0 }}>{data.label}</p></div>
        </div>
        <p className="title">{data.title}</p>
        <p className="body">
          {data.body}
        </p>
      </div>
    </div>
  );
}

export default App;
