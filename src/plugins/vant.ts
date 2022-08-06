/** 
 *  @author TalkTao
 * @description  按需引入Vant
*/ 
import { Button, Tabbar, TabbarItem, Sticky, NavBar, Icon, Search, DropdownMenu, 
	DropdownItem, Image, Lazyload, Tabs, Tab, Toast, Field, Cell, CellGroup, Form, List,
	Col, Row, Empty, Badge  } from 'vant'
const pluginsVant = [
	Button, 
	Tabbar,
	Badge,
	TabbarItem,
	Sticky,
	NavBar,
	Icon,
	Search,
	DropdownMenu,
	DropdownItem,
	Image,
	Lazyload,
	Empty,
	Tabs,
	Tab,
	Toast,
	Field,
	Cell,
	CellGroup,
	Form,
	List,
	Col,
	Row
]
export const vantPlugins = {
  	install: function(vm) {
    	pluginsVant.forEach((item:any) => {
      	vm.component(item.name, item);
    	});
  	}
};