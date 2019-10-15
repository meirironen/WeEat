const FILTER_KEYS = {
    DELIVERY_TIME : 'deliverytime',
    RATING: 'rating',
    CUISINE: 'cuisine_id'
};

const DELIVERY_TIME = ["30", "60", "90", "120", "180"];
const DELIVERY_FILTERS = DELIVERY_TIME.map(time => ({
    text: `At most ${time} minutes`,
    value: time
}));

const RATING_OPTIONS = Array(3)
    .fill()
    .map((item, index) => ({
        text: "⭐".repeat(index + 1),
        value: (index + 1).toString()
    }));


const equalityFilterHandler = (list = [], filterKey = '', filterValue = null) =>{
    if ( !filterKey) return list;
    return list.filter( item => item[filterKey].toString() === filterValue)
};

const numberLessThanFilter = (list = [], filterKey = '', filterValue = null) =>{
    if ( !filterKey) return list;
    return list.filter( item => item[filterKey] <= Number(filterValue));
};

export const FILTER_HANDLERS = {
    [FILTER_KEYS.CUISINE] : equalityFilterHandler,
    [FILTER_KEYS.RATING] : equalityFilterHandler,
    [FILTER_KEYS.DELIVERY_TIME] : numberLessThanFilter,
};

const insertEmptyValues = arrayFilter => [{text:'', value:''}].concat(arrayFilter);

const createFilters = (cuisines = {}) => [
    {
        filterKey: FILTER_KEYS.CUISINE,
        label: "Cuisine",
        placeholder: "Asian, Indian, American...",
        options: insertEmptyValues(Object.keys(cuisines).map(id =>{
            return {
                text: cuisines[id],
                value: id
            }
        }))
    },
    {
        filterKey: FILTER_KEYS.RATING,
        label: "Rating",
        placeholder: "How many stars...",
        options: insertEmptyValues(RATING_OPTIONS),
    },
    {
        filterKey: FILTER_KEYS.DELIVERY_TIME,
        label: "Speed",
        placeholder: "How long will it be...",
        options: insertEmptyValues(DELIVERY_FILTERS)
    }
];

export default createFilters;
