import React, { useState, useEffect } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Card from '../Components/Projectcard';
import Pagination from '../Components/Projectpagination';
import data from '../Components/sampledata';
import style from './ProjectSection.module.css'
const Project = () => {

    const [selectedCategory, setSelectedCategory] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    useEffect(() => {
        const filteredData = selectedCategory
            ? data.filter((item) => item.category === selectedCategory)
            : data;
        setFilteredData(filteredData);
    }, [selectedCategory, data]);

    const visibleData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <Grid>
            <Row className='mt-0 mt-lg-3'>
                <Col xs={12} className='mt-5'>
                    <p className={style.subtitle}>Our Work</p>
                    <div >
                        <h5 className={style.title}>Look at our Projects</h5>
                        {/* Filter by Category */}
                        <div>
                            <button className={style.btn} onClick={(e) => handleCategoryChange(e.target.value)} value=''>All</button>
                            <button className={style.btn} onClick={(e) => handleCategoryChange(e.target.value)} value='frontend'>FrontEnd</button>
                            <button className={style.btn} onClick={(e) => handleCategoryChange(e.target.value)} value='fullstack'>Full Stack</button>
                            <button className={style.btn} onClick={(e) => handleCategoryChange(e.target.value)} value='reactjs'>reactjs</button>
                            <button className={style.btn} onClick={(e) => handleCategoryChange(e.target.value)} value='android'>android</button>

                        </div>
                    </div>

                    {/* Card Grid */}
                    <Row>
                        {visibleData.map((item, index) => (
                            <Col key={item.index} xs={10} sm={10} md={10} lg={4} className='mx-auto' >
                                <Card data={item} />
                            </Col>
                        ))}
                    </Row>

                    {/* Pagination */}
                    <div>
                        <Pagination
                            currentPage={currentPage}
                            itemsPerPage={itemsPerPage}
                            totalItems={filteredData.length}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </Col>
            </Row >
        </Grid >
    );
};

export default Project