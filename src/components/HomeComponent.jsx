import React from 'react';
import { withTranslation } from 'react-i18next';

class HomeComponent extends React.Component {
  render() {
    const { t, i18n } = this.props;
    return (
      <div>
        <h1>{t('home.mainTip')}</h1>
        <button onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en')}>
          {i18n.language === 'en' ? '切换成中文' : '切换成英文'}
        </button>
      </div>
    );
  }
}
export default withTranslation()(HomeComponent);
