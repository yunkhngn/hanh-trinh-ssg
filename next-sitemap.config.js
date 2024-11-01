// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://hanhtrinhssg.tech',
    generateRobotsTxt: true, // Tạo tệp robots.txt
    changefreq: 'daily', // Tần suất thay đổi nội dung
    priority: 0.7, // Độ ưu tiên của các trang
    sitemapSize: 5000, // Kích thước tối đa của mỗi sitemap
    exclude: ['/admin', '/dashboard/*'], // Loại bỏ các trang không muốn đưa vào sitemap
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' }, // Cho phép tất cả các bot truy cập
      ],
    },
  }