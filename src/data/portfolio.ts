export default <PortfolioItemData[]>[
  {
    title: 'SLCommands',
    imgUrl: '/assets/sl-commands.png',
    stack: ['Discord.JS', 'TypeScript'],
    link: 'https://github.com/bluee-js/sl-commands',
  },
  {
    title: 'Square Cloud Easy',
    imgUrl: '/assets/vscode-extension.png',
    stack: ['VS Code Extension', 'TypeScript'],
    link: 'https://github.com/squarecloudofc/vscode-extension',
  },
  {
    title: 'Square Cloud Wrapper',
    imgUrl: '/assets/squarecloud-wrapper.png',
    stack: ['Axios', 'TypeScript'],
    link: 'https://github.com/squarecloudofc/wrapper-api-js',
  },
  {
    title: 'Square Cloud CLI',
    imgUrl: '/assets/squarecloud-cli.png',
    stack: ['Commander', 'TypeScript'],
    link: 'https://github.com/squarecloudofc/cli-js',
  },
];

export interface PortfolioItemData {
  title: string;
  imgUrl: string;
  stack: string[];
  link: string;
}
