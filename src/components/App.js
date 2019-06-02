import React, { Component, Fragment } from 'react';

import Header from './Header';
import Post from './Post';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Marcos Silva',
          avatar:
            'https://blog.barbaderespeito.com.br/wp-content/uploads/2018/08/%C3%B3culos-de-sol-masculino-4-300x218.jpg',
        },

        time: 'Há 3 min',
        content:
          'Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Casamentiss faiz malandris se pirulitá. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.',
      },
      {
        id: 2,
        author: {
          name: 'Danielle Pereira',
          avatar:
            'https://correio-cdn2.cworks.cloud/fileadmin/acervo/uploads/RTEmagicC_f4a1dfedb5.jpg.jpg',
        },
        time: 'Há 5 min',
        content:
          'Quem num gosta di mim que vai caçá sua turmis! Per aumento de cachacis, eu reclamis. Si num tem leite então bota uma pinga aí cumpadi! Viva Forevis aptent taciti sociosqu ad litora torquent.',
      },
      {
        id: 3,
        author: {
          name: 'Bruno Moraes',
          avatar:
            'https://3.bp.blogspot.com/-YdAUk4I2YuA/Wlx2lHuRBsI/AAAAAAAA7oI/QY3eb0970cQxYVDqSNo_AK9WiNGiCAPyQCLcBGAs/s1600/%25C3%25B3culos-de-sol-masculino-pra-2018-lente-espelhada-prata%2B%25282%2529.jpg',
        },
        time: 'Há 30 min',
        content:
          'Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Mé faiz elementum girarzis, nisi eros vermeio. A ordem dos tratores não altera o pão duris. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.',
      },
      {
        id: 4,
        author: {
          name: 'Danilo Dias',
          avatar:
            'https://d26lpennugtm8s.cloudfront.net/stores/203/992/products/2071-7e1908df686739422215360938044594-320-0.jpg',
        },
        time: 'Há 35 min',
        content:
          'Interagi no mé, cursus quis, vehicula ac nisi. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Pra lá , depois divoltis porris, paradis. Delegadis gente finis, bibendum egestas augue arcu ut est.',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <Fragment>
        <Header />
        <div className="container">
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </Fragment>
    );
  }
}
