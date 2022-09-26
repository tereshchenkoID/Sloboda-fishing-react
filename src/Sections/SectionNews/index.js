import {useSelector} from "react-redux";
import YouTube from 'react-youtube';

import styles from './index.module.scss'

import {translate} from "../../i18n/translate";

import Container from "../../Components/Container";
import ContainerFluid from "../../Components/ContainerFluid";
import Title from "../../Components/Title";
import Link from "../../Components/Link";

const opts = {
    height: '250',
    width: '100%',
    playerVars: {
        autoplay: 0,
        wmode: 'opaque',
        origin: window.location.origin
    },
};

const SectionNews = ({inner}) => {
   let { data } = useSelector(state => state.dataReducer);

   return (
      <section id={'section-6'}>
          <ContainerFluid>
              <Container>
                  <Title title={translate('news-title')} />
                  <div className={styles.grid}>
                      <div>
                          <iframe width="100%" height="250" src="https://www.youtube.com/embed/tUe4Ev1SQ8w"
                                  title="YouTube video player" frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen></iframe>
                      </div>
                      <div>
                          <iframe width="100%" height="250" src="https://www.youtube.com/embed/lejDhCQicPs"
                                  title="YouTube video player" frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen></iframe>
                      </div>
                      <div>
                          <iframe width="100%" height="250" src="https://www.youtube.com/embed/3DMv4FQCUQs"
                                  title="YouTube video player" frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen></iframe>
                      </div>
                      {/*{*/}
                      {/*    data.news.items.slice(0, inner ? data.news.items.length : 3).map((item, index) =>*/}
                      {/*        <div key={index}>*/}
                      {/*            <YouTube*/}
                      {/*                videoId={item.src}*/}
                      {/*                opts={opts}*/}
                      {/*                className={styles.player}*/}
                      {/*            />*/}
                      {/*            <h6 className={styles.title}>*/}
                      {/*                <a*/}
                      {/*                   href={item.link}*/}
                      {/*                   target={'_blank'}*/}
                      {/*                   rel={"noreferrer"}*/}
                      {/*                >*/}
                      {/*                    {item.title}*/}
                      {/*                </a>*/}
                      {/*            </h6>*/}
                      {/*            <p className={styles.date}>{item.date}</p>*/}
                      {/*            <p className={styles.description}>{item.description}</p>*/}
                      {/*        </div>*/}
                      {/*    )*/}
                      {/*}*/}
                  </div>
                  {
                      !inner &&
                      <div className={styles.wrapper}>
                          <Link link={'/news'} text={translate('button_text_2')}/>
                      </div>
                  }
              </Container>
          </ContainerFluid>
      </section>
  )
}

export default SectionNews;
