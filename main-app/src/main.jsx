
import Garfish from 'garfish'
Garfish.run({
  basename: '/',
  domGetter: '#root',
  apps: [
    {
      name: 'react',
      activeWhen: '/react',
      entry: 'http://localhost:3001', // html入口
      sandbox: false,
    },
  ],
});