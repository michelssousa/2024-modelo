import Head from 'next/head' 
const Header = (head) => {
    return (
        <Head>
            <meta name="theme-color" content="#121212"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover"/>
            <title>KaChat</title>
            <link rel="shortcut icon" href={!head.profile ? "icon.png" : "../../icon.png"} type="image/x-png" />
            <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet"/>
            <script src="https://pro.fontawesome.com/releases/v5.15.1/js/all.js"></script>
        </Head>
    )
}
export default Header