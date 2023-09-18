export const slugify = (string: string) => {
    return string
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
        .split(" ")
        .map(word => {
            if (word.includes("-")) {
                return word;
            }
            return word.toLowerCase();
        })
        .join("-");
};