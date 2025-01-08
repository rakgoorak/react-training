import DateUtils from '@date-io/moment';
import "moment/locale/th";

export default class DateTest extends DateUtils {
    constructor({ locale, formats, instance }) {
        super({ locale, formats, instance });
    }

    date = (value = null) => {
        if (value === null) {
            return null;
        }
        const momentInstance = this.moment(value);
        momentInstance.locale(this.locale);
        return momentInstance;
    };

    toBuddhistYear(momentInstance, format) {
        const christianYear = momentInstance.format('YYYY');
        const buddhistYear = (parseInt(christianYear) + 543).toString();
        return momentInstance
            .format(format.replace('YYYY', buddhistYear).replace('YY', buddhistYear.substring(2, 4)))
            .replace(christianYear, buddhistYear);
    }

    format = (date, formatKey) => {
        return this.toBuddhistYear(date, formatKey);
    };
}