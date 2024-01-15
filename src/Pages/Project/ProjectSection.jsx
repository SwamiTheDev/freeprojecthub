import React, { useState, useEffect } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import projectdata from '../../Api/Projects/ProjectApi';
import style from './ProjectSection.module.css'
import CustomPagination from '../../Components/pagination/Projectpagination';
import ProjectFullPage from '../../Components/Project/ProjectFullpage';
import ProjectCard from '../../Components/Project/Projectcard';


const Project = () => {
    const [selectedCard, setSelectedCard] = useState(null);

    const [selectedCategory, setSelectedCategory] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6);
    // Get filtered projects based on selected category
    const totalItems = projectdata.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    // Replace with the total number of pages in your data.

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        // You can also fetch data based on the newPage if you are using an API.
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    const handleCardClick = (cardId) => {
        const selected = projectdata.find((card) => card.id === cardId);
        setSelectedCard(selected);
    };

    const handleBack = () => {
        setSelectedCard(null);
    };

    useEffect(() => {
        const filteredData = selectedCategory
            ? projectdata.filter((item) => item.category === selectedCategory)
            : projectdata;
        setFilteredData(filteredData);
    }, [selectedCategory, projectdata]);

    const visibleData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <>
            <Grid className={style.projects}>
                <Row className=''>
                    <Col className=' '>
                        {/* Card Grid */}
                        {selectedCard ? (

                            <ProjectFullPage readme={selectedCard.readme} onBack={handleBack} />
                        ) : (
                            <Row>
                                <p className={style.subtitle}>Our Work</p>
                                <h4 className={style.title}>Look at <span style={{ color: 'hsl(5, 85%, 63%)' }}>our Projects</span>  </h4>
                                {/* Filter by Category */}
                                <div className={style.btn_align} >
                                    <button className={style.btn} onClick={(e) => handleCategoryChange(e.target.value)} value=''>All</button>
                                    <button className={style.btn} onClick={(e) => handleCategoryChange(e.target.value)} value='frontend'>FrontEnd</button>
                                    {/* <button className={style.btn} onClick={(e) => handleCategoryChange(e.target.value)} value='fullstack'>Full Stack</button> */}
                                    <button className={style.btn} onClick={(e) => handleCategoryChange(e.target.value)} value='reactjs'>React js</button>
                                    {/* <button className={style.btn} onClick={(e) => handleCategoryChange(e.target.value)} value='android'>Android</button> */}
                                </div>

                                {visibleData.map((item, index) => (
                                    <Col key={item.index} xs={11} sm={5} md={6} lg={4} xl={4}   >
                                        <Row className={style.row} >
                                            <ProjectCard img={item.img} category={item.category} title={item.title} text={item.minicontent} Click={() => { handleCardClick(item.id) }} />
                                        </Row >
                                    </Col>
                                ))}
                                <div className={style.pagination}>
                                    <CustomPagination
                                        page={currentPage}
                                        totalPages={totalPages}
                                        onPageChange={handlePageChange}
                                    />
                                </div>
                            </Row>
                        )}
                    </Col>
                </Row >
            </Grid >
        </>
    );
};

export default Project