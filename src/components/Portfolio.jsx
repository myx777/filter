import React from "react";
import ProjectList from "./ProjectList";
import Toolbar from "./Toolbar";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFilter: 'All',
    };
  }

  handleSelectFilter = (filter) => {
    this.setState({ selectedFilter: filter });
  };

  render() {
    console.log(this.state)
    console.log(this.props)
    const { selectedFilter } = this.state;
    const { filters, projects } = this.props;

    const filteredProjects =
      selectedFilter === 'All'
        ? projects
        : projects.filter(project => project.category === selectedFilter);

    return (
      <div>
        <Toolbar
          filters={filters}
          selected={selectedFilter}
          onSelectFilter={this.handleSelectFilter}
        />
        <ProjectList projects={filteredProjects} />
      </div>
    );
  }
}

export default Portfolio;
