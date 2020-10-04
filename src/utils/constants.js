export const CATALOG_TABLE_LABELS = [
    'Название',
    'Количество товаров',
]

export const GOODS_TABLE_LABELS = [
    'Название',
    'Бренд',
    'Модель',
    'Стоимость',
]

export const CATALOG_FORM_FIELDS = [
    {
        label: 'Название:',
        name: 'title',
        type: 'text',
        required: true,
    },
    {
        label: 'Описание:',
        as: 'textarea',
        name: 'description',
        type: 'text',
        rows: 8,
    },
]

export const GOOD_FORM_FIELDS = [
    {
        label: 'Название:',
        name: 'title',
        type: 'text',
        required: true,
    },
    {
        label: 'Брэнд:',
        name: 'brand',
        type: 'text',
    },
    {
        label: 'Модель:',
        name: 'model',
        type: 'text',
    },
    {
        label: 'Стоимость:',
        name: 'price',
        type: 'text',
    },
    {
        label: 'Описание:',
        as: 'textarea',
        name: 'description',
        type: 'text',
        rows: 8,
    },
]
