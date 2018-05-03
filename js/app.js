$(document).ready(function() {

// main script exectution starts here

  const $ulList = $('.student-list');  // get ul element with list items to paginate

  $ulList.append( appendPageLinks($ulList) );  // paginate and add Event Listener for each page link

  /* about the appendPageLinks() function...

      adds pagination functionality
        hide list of items
        calls showPage() with requried arguments to hide/show list items for a given page
        calls createPageLinks() with required arguments to add a set of page links

      takes a jquery html collection node of list items as an argument
       required argument....$node, pageToShow,
        optional...itemsPerPage

      adds an event listener for each page link...
      which responds to a click event on a page link calls
            $node.append(                      // $node is appended with results of ...
                appendPageLinks($node,        // assigned on initial exectution and passed thereafter
                                ,pageToShow,  // set by getting the attribute of the event target on the page link
                                itemsPerPage) // assigned on initial exectution and passed thereafter
            );


      default pageToShow = 1
      default itemsPerPage =  10

      can change both of the above defaults ....
       if initial call of function has all 3 arguments, ..
        arguments must be in order as declared ...
         $node, pageToShow, itemsPerPage
          $node: refers to html parent element of list items

       example: for page initial page 2 and 20 items per page
       $node.append( appendPageLinks($node, 2, 20) );

  */

});


// // function declartions
//
//     function calcPagesNeeded(lengthOfArray, itemsPerPage){
//       // determine how many pages for this array of list of items
//       return Math.ceil( lengthOfArray / itemsPerPage );
//     }
//
//     function setIndex( pageToShow, itemsPerPage) {
//       // setting index for iteration through array of list items
//       // given a pageNum and perPage, find which number index should start at
//       return index =  (pageToShow * itemsPerPage) - itemsPerPage;
//     }
//
//     function setMaxIndex(lengthOfArray, pageToShow, itemsPerPage){
//       // given itemsPerPage, find which number index should stop at
//       // for last page, make sure index does not go past end of array
//       if (lengthOfArray < (pageToShow * itemsPerPage) ) {
//         return lengthOfArray - 1;
//       } else {
//         return (pageToShow * itemsPerPage) - 1;
//       }
//     }
//
//     function hideItems($node){
//       // 'hide' all list items in the html Node by adding a style attribute of 'display:none;'
//       $node.children().attr('style', 'display:none');
//     }
//
//     function showPage($node, pageToShow, itemsPerPage) {
//
//       /* takes a jquery html collection node of ul/li elements as an argument
//          on given page, remove the style attribute for list items for that page
//          return the html collection node of ul/li elements
//          required argument: jquery html collection node
//       */
//
//       // get a starting index for this page of list items
//       let index = setIndex( pageToShow, itemsPerPage);
//
//       // get the end index for this page of list of itemns
//       let maxIndex = setMaxIndex($node.children().length, pageToShow, itemsPerPage);
//
//       // iterate thru all list items in the node
//       $node.children().each( function () {
//           // iterate only through list items [index] thru [maxIndex]
//           if (index <= maxIndex) {
//             // remove the style attribute for this list item
//            $node.children()[index].removeAttribute('style');
//           } // end if
//           // increment index
//           index++;
//         }); // end .each
//
//       return $node;  // return the $node with the modified list items
//
//     } // end showPage function
//
//     function createPageLinks(lengthOfArray, pageToShow, itemsPerPage){
//
//       /* takes number of pages needed return a div with a ul/li of page links
//         required arguments: lengthOfArray, pageToShow, itemsPerPage
//       */
//
//       const pagesNeeded = calcPagesNeeded(lengthOfArray, itemsPerPage)
//
//        //create the div for the pagelinks section, add a class, .pagination
//       const pageLinks = document.createElement('div');
//       pageLinks.setAttribute("class", "pagination");
//
//       // create a ul for the list of links items, add a class, .paginationUl
//       const pageLinksUl = document.createElement('ul');
//       pageLinksUl.setAttribute("class", "paginationUl");
//
//       for (let i = 0; i < pagesNeeded; i++) { // for each page
//
//          //create a list item with an a tag and href link and textContent to respective page number
//         let listItem = document.createElement('li');
//         let aLink = document.createElement('a');
//         aLink.setAttribute("href", "#");
//         aLink.textContent = (i+1);
//         aLink.setAttribute("value", (i+1));
//
//         if (i === (pageToShow - 1)) {  // set to the link for page 1 or link 0 to a class of .active
//           aLink.setAttribute("class", "active");
//         }
//
//         listItem.append(aLink);
//         pageLinksUl.append(listItem);  // add the li to the ul
//
//       }  // end for loop
//
//       pageLinks.append(pageLinksUl);  // and the ul to the div
//
//       return pageLinks;
//
//     } // end createPageLinks function
//
//     function appendPageLinks ($node, pageToShow, itemsPerPage) {
//
//       /* adds pagination functionality
//           calls showPage() with requried arguments to hide/show list items for a given page
//           calls createPageLinks() with required arguments to add a set of page links
//           adds a event listener for each page link
//        */
//
//       let perPage = 10;  // default itemsPerPage
//       if (itemsPerPage) {
//         perPage = ItemsPerPage;
//       } // if ItemsPerPage passed, use it
//
//       let pageNum = 1; // by default show page 1
//       if (pageToShow) {
//         pageNum = pageToShow;
//       } // if pageToShow passed, use it
//
//       // getting the length of array of list items
//       const lengthOfArray = $node.children().length
//
//       // hide all html child elements from the ul that contain the list items
//       hideItems($node);
//
//       // take the node of list items, split up into as many pages needed for ItemsPerPage
//       $node = showPage($node, pageNum, perPage);
//       //$ulList.append( itemsToShow );
//
//       // initial run and each time a page of links is displayed
//               // create a page link section
//                 // "for" every page
//                   // add a page link to the page link section
//                       //  and mark "pageToShow" link as the active link.
//
//
//       $node.parent().append( createPageLinks(lengthOfArray, pageNum, perPage) );
//       // $ulList.append( pageLinks );
//
//       const paginationLinks = document.querySelectorAll('.pagination li a')
//
//       paginationLinks.forEach(a => {
//         a.addEventListener('click', function (){
//           // if a page link clicked
//
//           pageToShow = $(this)[0].getAttribute('value');  // get the page number to show
//           $('.pagination').remove('*');
//           $node.append( appendPageLinks($node, pageToShow, itemsPerPage) ); // user selects pageToShow, default 4 list items per page
//
//           // and append that list to the page.
//           // When each link is clicked,
//             //  we'll use the showPage function to display the corresponding page,
//
//                 // For example, clicking the link to page 2
//                   //  will tell the showPage function to display students 11 through 20.
//           //event.preventDefault();
//           }); // end pagination event listener
//
//        }); // end forEach paginationLinks
//
//     } // end appendPageLinks function