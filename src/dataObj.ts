export interface Board {
  id: number;
  name: string;
  tables?: Table[];
}

interface Table {
  type: string;
  title: string;
  inputs?: Tinput[];
}

interface Tinput {
  input: string;
  state: boolean;
}

export interface Doc {
  id: number;
  title: string;
  docs: DocObj[];
}

interface DocObj {
  title: string;
  doc: string;
}


export const boards = [
  {
    id: 1,
    name: 'learning',
    tables: [
      {
        type: 'chackList',
        title: 'what to learn',
        inputs: [
          {
            input: 'coding',
            state: false,
          },
          {
            input: 'cocking',
            state: false,
          },
        ],
      },
    ],
  },
];

export const docs = [
  {
    id: 1,
    title: 'Board',
    docs: [
      {
        title: 'New board',
        doc: 'The way to make a new board is simple. just click the “add new board” button at the bottom of the page and a board tamplate will pop up and will ask you to give a name for the new board you want to create. after this step your board will be ready!!'
      },
      {
        title: 'Remove board',
        doc: 'To remove a board just click the - icon next to the board title. after you will get a warning pop up and if you mark it as check the board will be removed and all the data inside it will be lost!!'
      }
    ]
  },
  {
    id: 2,
    title: 'Table',
    docs: [
      {
        title: 'New table',
        doc: 'By pressing the white + icon next to your board name, popup will upper with a few steps to get your table done fill all steps and at the end you will have a table.'
      },
      {
        title: 'Remove table',
        doc: 'To remove a table click the yellow - icon at the table title area, after that the table will be removed immediately.'
      }
    ]
  },
  {
    id: 3,
    title: 'input',
    docs: [
      {
        title: 'New Input',
        doc: 'press the yellow + icon next to your table title and after that input template will appear, fill the input as you like and finally click the red + icon to confirm the input.'
      },
      {
        title: 'Mark as done',
        doc: 'When you finish your task, mark it as done by clicking on the text of your task.'
      },
      {
        title: 'Remove Input',
        doc: 'By pressing the red - icon the input will be removed.'
      }
    ]
  },
];
