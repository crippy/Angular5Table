tsc
echo 'Javascript Built';
cp ./src/table.component.html ./dist/table.component.html
sass ./src/table.component.scss>./dist/table.component.css
echo 'Table Component Assets Moved and Compiled';
cp ./src/column-data/column-data.component.html ./dist/column-data/column-data.component.html
sass ./src/column-data/column-data.component.scss>./dist/column-data/column-data.component.css
echo 'Column Data Component Assets Moved and Compiled';
cp ./src/column-filter/column-filter.component.html ./dist/column-filter/column-filter.component.html
sass ./src/column-filter/column-filter.component.scss>./dist/column-filter/column-filter.component.css
echo 'Column Filter Component Assets Moved and Compiled';
cp ./src/column-header/column-header.component.html ./dist/column-header/column-header.component.html
sass ./src/column-header/column-header.component.scss>./dist/column-header/column-header.component.css
echo 'Column Header Component Assets Moved and Compiled';
