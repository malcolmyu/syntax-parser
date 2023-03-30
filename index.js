const sp = require('./dist/cjs/demo/sql-parser');

const ast = sp.mysqlParser("CREATE UNIQUE INDEX `dynamic_analysis_page_url_reporter_id_key` ON `gifshow`.`dynamic_analysis`(`page_url`, `reporter_id`);");
// const ast = sp.mysqlParser("ALTER TABLE `gifshow`.`reporter` ADD COLUMN `urls` TEXT NULL COMMENT 'urls'");
// const ast = sp.mysqlParser("ALTER TABLE `gifshow`.`reporter`");
console.log(ast);