import style from "./colors-config";

export const setColors = (type: string) => {
    console.log(style[type])
    let background;
    let title = style[type].title;
    let titleHover = style[type].titleHover;

    if (style[type].background.length > 1) {
        background = `linear-gradient(${style[type].degree}deg, ${style[type].background.join(', ')})`;
    }
    else {
        background = style[type].background
    }

    return ({
        background: background,
        title: title,
        titleHover: titleHover,
    })
}