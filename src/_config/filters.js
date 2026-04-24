import { DateTime } from "luxon";

export default function (eleventyConfig) {
    eleventyConfig.addFilter("outOfDate", (dateObj) => {
        return (
            DateTime.fromJSDate(dateObj, "dd.MM.yyyy").diffNow("years").toObject()
                .years < -2
        );
    });

    eleventyConfig.addFilter("readableDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toFormat("LLLL dd, yyyy");
    });

    eleventyConfig.addFilter("dateMoYr", (dateObj) => {
        return DateTime.fromISO(dateObj).toFormat("MMM yyyy");
    });

    // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    eleventyConfig.addFilter("htmlDateString", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toFormat("yyyy-LL-dd");
    });

    eleventyConfig.addFilter("readableDateFromISO", (dateObj) => {
        return DateTime.fromISO(dateObj).toFormat("LLL dd yyyy");
    });

    eleventyConfig.addFilter("shortDateFromUNIX", (dateObj) => {
        return DateTime.fromSeconds(dateObj).toFormat("yyyy LLL dd");
    });

    eleventyConfig.addFilter("readableDateFromUNIX", (dateObj) => {
        return DateTime.fromSeconds(dateObj).toFormat("LLLL dd, yyyy");
    });

    // Get the first `n` elements of a collection.
    eleventyConfig.addFilter("head", (array, n) => {
        if (n < 0) {
            return array.slice(n);
        }

        return array.slice(0, n);
    });

    // Return collection count
    eleventyConfig.addFilter("itemCount", (array) => array.length );

    // Filter posts by tag
    eleventyConfig.addFilter("filterByTag", (posts, tag) => {
        tag = tag.toLowerCase();
        let result = posts.filter(p => {
            let tagged = p.data.tags.map(t => t.toLowerCase());
            if (tagged) {
                return tagged.includes(tag);
            }
        });
        return result;
    });

    function getDeepProp(obj, prop = null) {
        // If there is no property, return the value as-is
        if (!prop) { return obj; }

        // Create a list of properties to pluck one by one
        const propChain = prop.split('.');
        let groupVal = obj; // Start with the original value
        const chain = propChain.slice();
        while (chain.length > 0 && groupVal !== null) {
            const subProp = chain.shift().trim();
            groupVal = groupVal[subProp] ?? null;
        }
        return groupVal;
    }

    // Sorts array of objects by a property value.
    eleventyConfig.addFilter('sortBy', (array, reverse = false, caseSens = false, prop = null) => {
        if (Array.isArray(array) === false) { throw new Error(`sortBy filter expects an array, was given ${typeof array}`); }
        if (prop && typeof prop !== 'string') { throw new Error(`groupBy filter expects a property key (or dot-separated path), was given ${typeof pro}`); }

        const sortedArray = array.slice();
        const factor = reverse ? -1 : 1;

        return sortedArray.sort((a, b) => {
            const valA = getDeepProp(a, prop);
            const valB = getDeepProp(b, prop);
            return String(valA || '').localeCompare(String(valB || ''), 'en', { sensitivity: caseSens ? 'case' : 'variant' }) * factor;
        });
    });
}