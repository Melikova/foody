import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import downArrow from 'assets/icons/downArrow.svg'
import styles from 'components/common/SelectBox/selectbox.module.css'
import style from 'components/common/EditSelectBox/editselectbox.module.css'
import useRestaurantsData from 'hooks/useRestaurantsData'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example({ productResCategory }) {
    const { data } = useRestaurantsData()

    const restaurants = [
        data?.data.result.data.map((restaurant) => (
            {
                id: `${restaurant?.id}`,
                name: `${restaurant?.name}`,
            }
        ))
    ]

    const [selected, setSelected] = useState(restaurants)

    const filteredRestaurant = data?.data.result.data.find(restaurant => restaurant['category_id'] !== productResCategory)

    console.log(filteredRestaurant)


    return (

        <>
            <Listbox value={selected} onChange={setSelected}>
                {({ open }) => (
                    <>
                        <div className="relative top-4" >
                            <Listbox.Button className={styles['category-btn']} style={{ "width": "100%" }}>
                                <span className="flex justify-between items-center">
                                    <span className="block truncate">{selected.name ? selected.name : filteredRestaurant ? filteredRestaurant.name : ''}</span>
                                    <span>
                                        <img src={downArrow} alt='downArrow' />
                                    </span>
                                </span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                </span>
                            </Listbox.Button>
                            <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute z-10 mt-1 max-h-36 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" id={style.selectBox}>
                                    {data?.data.result.data.map((restaurant) => (
                                        <Listbox.Option
                                            key={restaurant.id}
                                            className={({ active }) =>
                                                classNames(
                                                    active ? 'bg-pink text-white' : 'text-gray-900',
                                                    'relative cursor-default select-none py-2 pl-3 pr-9'
                                                )
                                            }
                                            value={restaurant}
                                        >
                                            {({ selected, active }) => (
                                                <>
                                                    <div className="flex items-center">
                                                        <span
                                                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                                        >
                                                            {restaurant.name}
                                                        </span>
                                                    </div>

                                                    {selected ? (
                                                        <span
                                                            className={classNames(
                                                                active ? 'text-white' : 'text-indigo-600',
                                                                'absolute inset-y-0 right-0 flex items-center pr-4'
                                                            )}
                                                        >
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </>
                )}
            </Listbox>
        </>

    )
}
