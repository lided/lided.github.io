import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig(withSidebar({
  title: "Lided's Blog",
  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Readme', link: '/readme' },
    ],
    sidebar: [],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lided/lided' },
    ]
  },
}, [
  quickSidebar('linux'),
  quickSidebar('docker'),
  quickSidebar('java'),
  quickSidebar('vue3'),
  quickSidebar('database'),
]
))

function quickSidebar(path) {
  return {
    documentRootPath: '/',
    scanStartPath: path,
    resolvePath: `/${path}/`,
    useFolderLinkFromIndexFile: true,
    collapsed: true,
    sortMenusByFrontmatterOrder: true,
    capitalizeFirst: true,
    sortFolderTo: 'top',
  }
}
