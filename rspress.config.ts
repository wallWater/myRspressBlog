import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
 
  
  root: path.join(__dirname, 'docs'),
  title: '清生',
  description: 'Rspack-based Static Site Generator',
  icon: "/rspress-icon.png",
  logo: {
    light: "https://wallwater.github.io/myRspressBlog/rspress-dark-logo.png",
    dark: "https://wallwater.github.io/myRspressBlog/rspress-dark-logo.png",
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/web-infra-dev/rspress' },
    ],
  },
});
