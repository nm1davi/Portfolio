export default function PageLoader() {
    return (
        <div className="page-loader" aria-live="polite" aria-busy="true">
            <div className="loader-wrap">
                <div id="page">
                    <div id="container">
                        <div id="ring"></div>
                        <div id="ring"></div>
                        <div id="ring"></div>
                        <div id="ring"></div>
                        <div id="h3">CARGANDO</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
