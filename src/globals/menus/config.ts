import { GlobalConfig } from 'payload'

export const Navigation: GlobalConfig = {
  slug: 'navigation',
  fields: [
    {
      name: 'menus',
      type: 'array',
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '/components/admin/menu-row-label#MenuRowLabel',
        },
      },
      fields: [
        {
          name: 'menuName',
          label: 'Menu Name',
          type: 'text',
          required: true,
        },
        {
          name: 'menuItems',
          type: 'array',
          admin: {
            initCollapsed: true,
          },
          fields: [
            {
              name: 'URL',
              type: 'text',
              required: true,
            },
            {
              name: 'Label',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
