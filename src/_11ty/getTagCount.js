export default function(eleventyConfig) {
eleventyConfig.addCollection("tagCount", function(collectionsApi) {
		let tagCountMap = new Map();
		collectionsApi.getAllSorted().forEach(function(item) {
			if( "tags" in item.data ) {
				let tags = item.data.tags;
				if( typeof tags === "string" ) {
				tags = [tags];
				}
		
				tags = tags.filter(function(item) {
				switch(item) {
					// this list should match the `filter` list in tags.njk
					case "all":
					case "nav":
					case "post":
					case "posts":
					return false;
				}
		
				return true;
				});
		
				for (const tag of tags) {
					if (tagCountMap.has(tag)) {
						let cnt = tagCountMap.get(tag);
						tagCountMap.set(tag, cnt+1);
					} else {
						tagCountMap.set(tag, 1);
					}
				}
			}
		});
		//val sort desc
		return new Map([...tagCountMap.entries()].sort((a, b) => b[1] - a[1]));
		//key sort asc
		// return new Map([...tagCountMap.entries()].sort());
	});  
}