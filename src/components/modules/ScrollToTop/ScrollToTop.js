
import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

// This is a custom hook that is used to scroll to the top of the page when the user navigates to a new page.

function ScrollToTop() {
    const {pathname} = useLocation();
    useEffect(() => {
        window.scrollTo({top:0, behavior: 'smooth'});
    }, [pathname]);
  return null
}

export default ScrollToTop