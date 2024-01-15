import React, { useState, useEffect } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Blogdata from '../../Api/Blogdata/BlogDatas';
import style from './BlogSection.module.css'
import BlogCard from '../../Components/blog/BlogminiCard/BlogCard';
import LastestBlogData from '../../Api/Blogdata/latestBlogData';

import CustomPagination from '../../Components/pagination/Projectpagination'
import BlogFullCard from '../../Components/blog/BlogFullCard.jsx/BlogFullCard';
import BlogLatestCard from '../../Components/blog/BlogLatestCard/BlogLatestCard';

const Project = () => {
    const [selectedCard, setSelectedCard] = useState(null);

    const [selectedCategory, setSelectedCategory] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3);
    // Get filtered projects based on selected category
    const totalItems = Blogdata.length;
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
        const selected = Blogdata.find((card) => card.id === cardId);
        setSelectedCard(selected);
    };

    const handleBack = () => {
        setSelectedCard(null);
    };

    useEffect(() => {
        const filteredData = selectedCategory
            ? Blogdata.filter((item) => item.category === selectedCategory)
            : Blogdata;
        setFilteredData(filteredData);
    }, [selectedCategory, Blogdata]);

    const visibleData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <>
            <Grid className={style.projects}>
                <p></p>
                <h4 className={style.title}> Our <span style={{ color: 'hsl(5, 85%, 63%)' }}>Blogs</span>  </h4>
                <Row className=''>
                    <Col className=' '>
                        {/* Card Grid */}
                        {selectedCard ? (

                            <BlogFullCard readme={selectedCard.readme} onBack={handleBack} />
                        ) : (
                            <Row>
                                {/* Filter by Category */}
                                {/* <div className={style.btn_align} > */}
                                {/* <button className={style.btn} onClick={(e) => handleCategoryChange(e.target.value)} value=''>All</button> */}
                                {/* <button className={style.btn} onClick={(e) => handleCategoryChange(e.target.value)} value='frontend'>FrontEnd</button> */}
                                {/* <button className={style.btn} onClick={(e) => handleCategoryChange(e.target.value)} value='fullstack'>Full Stack</button> */}
                                {/* <button className={style.btn} onClick={(e) => handleCategoryChange(e.target.value)} value='reactjs'>React js</button> */}
                                {/* <button className={style.btn} onClick={(e) => handleCategoryChange(e.target.value)} value='android'>Android</button> */}
                                {/* </div> */}
                                <Col md={9} lg={10} xl={10}>
                                    {visibleData.map((item, index) => (

                                        <Col key={item.index} xs={12} sm={12} md={12} lg={12} xl={12} className='mx-auto'   >
                                            <Row className={style.blogrow} >
                                                <BlogCard coverimg={item.coverimg} tagname={item.category} title={item.title} text={item.minicontent} article={item.article} Click={() => { handleCardClick(item.id) }} />
                                            </Row >
                                        </Col>


                                    ))}
                                </Col>
                                <Col md={3} lg={2} xl={2}>
                                    <p className={style.latestblogtitle}>Lastest Blog</p>

                                    {LastestBlogData.map((latestblog, index) => {
                                        return (
                                            <>
                                                <Row key={LastestBlogData.index}>
                                                    <BlogLatestCard title={latestblog.title} lastestcontent={latestblog.minicontent} />
                                                </Row>
                                            </>
                                        )
                                    })
                                    }
                                </Col>

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