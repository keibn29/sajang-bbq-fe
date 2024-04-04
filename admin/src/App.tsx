import 'dayjs/locale/zh-cn';

import { Spin } from 'antd';

import { LocaleFormatter } from './locales';

const App: React.FC = () => {
  return (
    <Spin
      spinning={true}
      className="app-loading-wrapper"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.44)',
      }}
      tip={<LocaleFormatter id="gloabal.tips.loading" />}
    ></Spin>
  );
};

export default App;
