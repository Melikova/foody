import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import downArrow from 'assets/icons/downArrow.svg'
import styles from 'components/Restaurants/ResSelectBox/resselectbox.module.css'
import { useTranslation } from 'react-i18next'
import { useProductsCategory } from 'hooks/useProductsData'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { handleRestaurantsCategories } from 'redux/features/restaurantsSlice'

const people = [
    {
        id: 1,
        name: 'Category Type',
    },
    {
        id: 2,
        name: 'Hamburger',
    },
    {
        id: 3,
        name: 'Dönər',
    },
    {
        id: 4,
        name: 'Salat',
    },
    {
        id: 5,
        name: 'Kabab',
    },
    {
        id: 6,
        name: 'İçki',
    },
    {
        id: 7,
        name: 'Şirniyyat',
    },

]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {

    const { data } = useProductsCategory()

    const [selected, setSelected] = useState(people[0])
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const { t } = useTranslation()

    const handleRestaurantsCategory = (category, categoryID) => {
        dispatch(handleRestaurantsCategories(categoryID))
        navigate(`/restaurants/${category}`)
    }

    return (

        <>
            <Listbox value={selected} onChange={setSelected}>
                {({ open }) => (
                    <>
                        <div className="relative max-md:hidden">
                            <Listbox.Button className={styles['category-btn']}>
                                <span className="flex justify-between items-center">
                                    <span className="block truncate">{selected.name === 'Category Type' ? t("Category Type") : selected.name}</span>
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
                                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" id={styles['listbox-option']}>
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
                                                    <div className="flex items-center" onClick={() => handleRestaurantsCategory(restaurant?.slug, restaurant?.id)}>
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
                                                            {/* <CheckIcon className="h-5 w-5" aria-hidden="true" /> */}
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
