export const selectStyles = {
    control: (provided: any) => ({
        ...provided,
        minHeight: "26px",

        height: "26px",

        boxShadow: "none",

        "&:hover": {
            borderColor: "unset"
        },

        border: "none",

        borderRadius: "8px",

        backgroundColor: "var(--banco-color-bg-input)",

        focusBorder: "none",
    }),
    placeholder: (provided: any) => ({
        ...provided,
        color: "var(--banco-color-font-placeholder)",
        height: "80%",

    }),
    option: (provided: any) => ({
        ...provided,
        backgroundColor: "var(--banco-color-bg-input)",
    }),
    indicatorSeparator: (provided: any) => ({
        ...provided,
        display: 'none',
    }),

    indicatorsContainer: (provided: any) => ({
        ...provided,
        height: "100%",
        color: "var(--banco-color-font-placeholder)",
    })
};