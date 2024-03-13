package resources;

import Payload.addBook;

public class TestDataBuild {
	
	public addBook AddBookpayload(String id,String title,String description,String pageCount,String excerpt,String publishDate) {
		
		addBook p = new addBook();
		
		p.setId(id);
		p.setTitle(title);
		p.setDescription(description);
		p.setPageCount(pageCount);
		p.setExcerpt(excerpt);
		p.setPublishDate(publishDate);
		
		return p;
		
		
	}

}
