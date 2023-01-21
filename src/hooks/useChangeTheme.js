const useChangeTheme = () => {
    const changeCssRootVariables = (theme) => {
        const root = document.querySelector(':root');

        const components = [
            'body-background',
            'components-background',
            'card-background',
            'card-shadow',
            'text-color',
        ]

        components.forEach(component => {
            root.style.setProperty(
                `--${component}-default`,
                `var(--${component}-${theme})`
            );
        });
    }

    return {changeCssRootVariables};
}

export default useChangeTheme;