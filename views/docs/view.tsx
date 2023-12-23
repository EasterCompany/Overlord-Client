// Assets
import style from './style';
// Components
import Sidebar from '../../components/sidebar/sidebar';
// Library
import { POST, cookie } from '../../shared/library/api';
import { useState, useEffect } from 'react';
// Views
import DocumentViewer from './viewer/view';

const Docs = ({ currentView }) => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [navIsVisible, setNavVisible] = useState(true);
  const [document, setDocument] = useState({
    title: undefined,
    document: undefined
  });

  useEffect(() => {
    POST(
      'documentation/fetch',
      (resp) => console.log(resp),
      (resp) => setDocument(resp),
      { document: currentView }
    );
  }, [currentView]);

  return <>
    <Sidebar
      isVisible={navIsVisible}
      setVisible={setNavVisible}
      isDarkMode={isDarkMode}
      setDarkMode={setDarkMode}
    />
    <DocumentViewer
      title={document.title}
      navIsVisible={navIsVisible}
      isDarkMode={isDarkMode}
      content={document.document}
    />
  </>
}

export default Docs;
