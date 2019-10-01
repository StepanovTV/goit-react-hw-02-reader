import React, { Component } from 'react';
import publications from '../../publications.json';
import Controls from './Controls';
import Counter from './Counter';
import Publication from './Publication';
import styles from './styles.module.css';

class Reader extends Component {
  state = {
    items: 0,
  };

  handleNextPage = () => {
    this.setState(prevState => ({
      items: prevState.items + 1,
    }));
  };

  handlePrevPage = () => {
    this.setState(prevState => ({
      items: prevState.items - 1,
    }));
  };

  render() {
    const { items } = this.state;
    return (
      <section className={styles.sections}>
        <div className={styles.reader}>
          <Controls
            length={publications.length}
            items={items}
            nextPage={this.handleNextPage}
            prevPage={this.handlePrevPage}
          />
          <Counter length={publications.length} items={items} />
          <Publication
            id={publications[items].id}
            title={publications[items].title}
            text={publications[items].text}
          />
        </div>
      </section>
    );
  }
}

export default Reader;
