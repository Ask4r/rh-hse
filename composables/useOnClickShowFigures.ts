const showFigures = createEventHook();


export default function () {
    return {
        onShowFigures: showFigures.on,
        triggerShowFigures: showFigures.trigger,
    };
}