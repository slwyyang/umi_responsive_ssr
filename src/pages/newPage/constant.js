import { MailOutlined } from '@ant-design/icons';

export const menuData = [
    {
      title: 'Navigation One',
      icon: <MailOutlined />,
      key: '1',
      children: [
        {
          title: 'Option 1',
          key: '1-1',
          children: [
            {
              title: 'Option 11',
              key: '1-1-1',
            },
            {
              title: 'Option 12',
              key: '1-1-2',
            },
          ],
        },
        {
          title: 'Option 2',
          key: '1-2',
        },
        {
          title: 'Option 3',
          key: '1-3',
        },
      ],
    },
    {
      title: 'Navigation two',
      key: '2',
      children: [
        {
          title: 'Option 1',
          key: '2-1',
        },
        {
          title: 'Option 2',
          key: '2-2',
        },
        {
          title: 'Option 3',
          key: '2-3',
        },
      ],
    },
    {
      title: 'Navigation THree',
      key: '3',
      children: [
        {
          title: 'Option 1',
          key: '3-1',
        },
        {
          title: 'Option 2',
          key: '3-2',
        },
        {
          title: 'Option 3',
          key: '3-3',
        },
      ],
    },
  ];