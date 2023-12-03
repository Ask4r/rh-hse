export default function () {

    const currentURL = location.href;

    const {
        share,
        isSupported: isShareSupported,
    } = useShare();

    const {copy} = useClipboard({legacy: true});

    if (isShareSupported.value) {
        share({
            title: 'Russian history',
            text: '',
            url: currentURL,
        })
            .catch(() => copy(currentURL));
    } else {
        copy(currentURL).catch();
    }

}