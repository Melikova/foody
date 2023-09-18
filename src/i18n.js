import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            "Ürün Ekle": "Add Product",
            "Gösterge Paneli": "Dashboard",
            'Ürünler': 'Products',
            'Restoranlar': 'Restaurants',
            'Kategori': 'Category',
            'Siparişler' :  'Orders',
            'Teklif' : 'Offer',
            'Çıkış Yap' : 'Logout',
        }
    },
    tr: {
        translation: {
            "Add Product": "Ürün Ekle",
            'Dashboard': 'Gösterge Paneli',
            'Products': 'Ürünler',
            'Restaurants': 'Restoranlar',
            'Category': 'Kategori',
            'Orders' : 'Siparişler',
            'Offer' : 'Teklif',
            'Logout' : 'Çıkış Yap'
        }
    },
    aze: {
        translation: {
            "Add Product": "Məhsul Əlavə Et",
            "Dashboard": 'İdarə Paneli',
            'Products': 'Məhsullar',
            'Restaurants': 'Restoranlar',
            'Category': 'Kateqoriya',
            'Orders': 'Sifarişlər',
            'Offer': 'Təklif',
            'Logout': 'Çıxış'
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;