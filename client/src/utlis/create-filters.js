const DELIVERY_TIME = ["35", "60", "90", "120", "180"];
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

const insertEmptyValues = arrayFilter => [{text:'', value:''}].concat(arrayFilter);


const createFilters = (cuisines = {}) => [
    {
        filterKey: "cuisine",
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
        filterKey: "rating",
        label: "Rating",
        placeholder: "How many stars...",
        options: insertEmptyValues(RATING_OPTIONS)
    },
    {
        filterKey: "maxDeliveryTime",
        label: "Speed",
        placeholder: "How long will it be...",
        options: insertEmptyValues(DELIVERY_FILTERS)
    }
];

export default createFilters;
