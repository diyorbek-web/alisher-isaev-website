import { useState } from "react";

const SalesProgram = () => {
    const [activeItemId, setActiveItemId] = useState(0);
    const items = [
        {
            id: 1,
            title: 'Стратегия тузиш',
            childItems: ['5С таҳлил', 'Стратегия тузиш ва ижро этиш тизими', 'Савдони ошириш 5 стратегияси'] 
        },
        {
            id: 2,
            title: 'Режа тузиш тизими',
            childItems: ['Ҳисоб-китоб сиёсатини тузиш', 'Стратегия тузиш ва ижро этиш тизими', 'Савдони ошириш 5 стратегияси'] 
        },
        {
            id: 3,
            title: 'Сотиш маҳорати',
            childItems: ['Кўндириб сотиш формати', 'Стратегия тузиш ва ижро этиш тизими', 'Савдони ошириш 5 стратегияси'] 
        },
        {
            id: 4,
            title: 'Дистрибуция тизимини тузиш',
            childItems: ['5С таҳлил', 'Стратегия тузиш ва ижро этиш тизими', 'Савдони ошириш 5 стратегияси'] 
        },
        {
            id: 5,
            title: 'B2B савдо тизимини йўлга қўйиш',
            childItems: ['Савдо воронкаси - Power Map: мижознинг қарор қабул қилиш харитасини ўрганиш', 'Стратегия тузиш ва ижро этиш тизими', 'Савдони ошириш 5 стратегияси'] 
        }
    ];

    const setActiveItem = (item) => {
        if (activeItemId === item.id) {
            setActiveItemId(0);
            return;
        }
        setActiveItemId(item.id);
    }

    return (
        <div className="w-full space-y-8">
            <h2 className="text-6xl font-bold text-center text-white uppercase">
                <span className="text-success">Sales Doctor</span> <br />
                <span className="text-success">Academy</span> Dasturi
            </h2>
            <div className="space-y-2">
                {
                    items.map(item => {
                        return (
                            <div
                                key={item.id}
                                className="bg-black-80 p-6 group cursor-pointer"
                                onClick={() => { setActiveItem(item) }}
                            >
                                <div className="flex gap-6 items-center justify-between">
                                    <span className="text-2xl text-white font-medium">{item.title}</span>
                                    <div className="size-10 rounded-full flex bg-success group-hover:bg-white">
                                        <span className="m-auto text-lg text-white group-hover:text-success">
                                            { item.id === activeItemId ? '-' : '+' }
                                        </span>
                                    </div>
                                </div>
                                {
                                    item.id === activeItemId &&
                                    <ul className="mt-6 list-disc list-inside text-white">
                                        {
                                            item.childItems.map(childItem => {
                                                return (
                                                    <li>{childItem}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                }
                                <div></div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SalesProgram;