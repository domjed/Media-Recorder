import axios from 'axios';

export const getRecordings = async () => {
    /** Get recordings from database or display error if not possible */
    const url = process.env.REACT_APP_RECORDING_LIST_PATH;
    try {
        const response = await axios
            .get(url)
            .then((data) => {
                const recordings = data.data
                const isError = false
                return ({ "recordings": recordings, "isError": isError })
            })
            .catch((err) => {
                console.log(err);
                const recordings = []
                const isError = true
                return ({ "recordings": recordings, "isError": isError })

            });
        return response
    }
    catch (err) {
        console.log(err);
        const recordings = []
        const isError = true
        return ({ "recordings": recordings, "isError": isError })
    }
}
