(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{QeBL:function(e,t,a){"use strict";a.r(t);var n=a("y4Te"),i=a("q1tI"),l=a.n(i),o=a("Wbzz"),r=a("Bl7J"),s=a("vrFN");t.default=function(){var e=n.data;return l.a.createElement(r.a,null,l.a.createElement(s.a,{title:"Home"}),l.a.createElement("h1",null,"Recently Posts"),l.a.createElement("ul",null,e.allMarkdownRemark.edges.map((function(e){var t=e.node;return l.a.createElement("li",{key:t.id},l.a.createElement("h2",null,l.a.createElement(o.Link,{to:t.frontmatter.path},t.frontmatter.title)),l.a.createElement("h3",null,t.frontmatter.date),l.a.createElement("p",null,t.excerpt),l.a.createElement("hr",null))}))))}},y4Te:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"excerpt":"{% highlight swift %} enum RDUXCatalogs: BSTUXProtocol {\\n    case screens(UIViewController)\\n    case device(UIViewController) } {% endhighlight %}","frontmatter":{"title":"UIViewController enum samples","path":null,"date":null},"id":"15420c1d-e897-5a20-968a-1fbabe299d32"}},{"node":{"excerpt":"{% highlight swift %} class func requestDeterminingPermission(completion: BSTClosure.emptyAction? = nil) { } {% endhighlight %}","frontmatter":{"title":"Async DispatchQueue Usage","path":null,"date":null},"id":"e0f4ea6b-2a62-541b-aa81-44704265f34a"}},{"node":{"excerpt":"source: https://medium.com/swift-programming/using-lazy-to-delay-computation-8aa4ea236d0a {% highlight swift %} /// Avoid creating multiple layers of LazySequence wrapper.\\n/// Anything conforming to …","frontmatter":{"title":"Functional, lazy protocol","path":null,"date":null},"id":"b26df070-83ea-59bc-9548-24af50e5006c"}},{"node":{"excerpt":"{% highlight swift %} Observable<Notice>.of(self.notifications)\\n    .replaceNilWith([])\\n    .bind(to: tableView.rx.items(cellIdentifier: \\"NotificationTableViewCell\\", cellType: NotificationTableViewCe…","frontmatter":{"title":"RxSwift Code Snippet","path":null,"date":null},"id":"3926f370-bb1a-543d-8509-a3a12401bc18"}},{"node":{"excerpt":"You can only upcast to a parent type: var closure : (Subclass) -> () = {\\n    (first : Superclass) in\\n}\\nyou cannot downcast to a subclass","frontmatter":{"title":"closure, cast constraint","path":null,"date":null},"id":"c746e954-b8df-5865-8a3d-d2ea186192f0"}},{"node":{"excerpt":"apple-doc Conditional Compilation Blocks\\nSwift code and Objective-C code are conditionally compiled in different ways. Swift code can be conditionally compiled using conditional compilation blocks. F…","frontmatter":{"title":"Conditional Compilation Blocks","path":null,"date":null},"id":"3119b92a-59e7-5c68-ab3f-d6271a580580"}},{"node":{"excerpt":"source Protocol Extension: function\'s implementation cannot be overridden by a subclass   A function(x\') is not called that we thought If there is following conditions.   A protocol(A) is defined a f…","frontmatter":{"title":"Protocol Extension - function\'s implementation cannot be overridden by a subclass","path":null,"date":null},"id":"94dc5531-41cd-5b2e-ae99-469bea8dc6c0"}},{"node":{"excerpt":"Jekyll is a static site generator, an open-source tool for creating simple yet powerful websites of all shapes and sizes. From the project\'s readme: Jekyll is a simple, blog aware, static site genera…","frontmatter":{"title":"What\'s Jekyll?","path":null,"date":null},"id":"e9c21e57-ed26-5828-830b-6ea2703a4f6c"}},{"node":{"excerpt":"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lob…","frontmatter":{"title":"Example content","path":null,"date":null},"id":"2bf61642-6603-5e41-a619-6be69078a00b"}},{"node":{"excerpt":"Lanyon is an unassuming Jekyll theme that places content first by tucking away navigation in a hidden drawer. It\'s based on Poole, the Jekyll butler. Built on Poole Poole is the Jekyll Butler, servin…","frontmatter":{"title":"Introducing Lanyon","path":null,"date":null},"id":"db1867d7-4681-5578-bbb0-0531d20c6aab"}},{"node":{"excerpt":"This is a sample build configuration for PHP. (mod by Theerayooth Kosin)\\nCheck our guides at https://confluence.atlassian.com/x/VYk8Lw for more examples.\\nOnly use spaces to indent your .yml configura…","frontmatter":{"title":"Sonar scanner for Bitbucket pipeline","path":null,"date":null},"id":"39f6f21c-af79-5d63-bc1b-812fe474d59e"}},{"node":{"excerpt":"fact based = background, factor, status define core questions collect fact based information fractionate data for information get meaning","frontmatter":{"title":"1page class summary - 5","path":null,"date":null},"id":"ac875a21-7727-574c-a94a-84792a005acd"}},{"node":{"excerpt":"출처: 카카오 AI리포트 2017 모음집","frontmatter":{"title":"AI를 학습할 수 있는 무료 온라인 강의 소개","path":null,"date":null},"id":"6f66a5f1-6b30-579b-a893-598c8479fa1c"}},{"node":{"excerpt":"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lob…","frontmatter":{"title":"Example content","path":null,"date":null},"id":"ada2c752-6801-5935-8ff0-da48d134a316"}},{"node":{"excerpt":"install Iterm2 brew install zsh install open-my-zsh choose color in preferences set ZSH_THEME=\\"agnoster\\" in ~/.zshrc change font to d2font by naver >> ligature syntax_highlighting remove mac-book","frontmatter":{"title":"Iterm2 - integrate zsh","path":null,"date":null},"id":"72b7c396-3b8a-536c-8421-2a372678595a"}},{"node":{"excerpt":"This is a sample build configuration for PHP. (mod by Theerayooth Kosin)\\nCheck our guides at https://confluence.atlassian.com/x/VYk8Lw for more examples.\\nOnly use spaces to indent your .yml configura…","frontmatter":{"title":"Sonar scanner for Bitbucket pipeline","path":null,"date":null},"id":"07dd1b02-3b63-55ea-a50c-0067ff8c2d2e"}},{"node":{"excerpt":"Set the orientation option on project settings\\n({{ \\"/assets/posts/2018-01-14.png\\" | absolute_url }}) In First, Set the orientation at AppDelegate\\n{% highlight swift %}\\nvar enableAllOrientation = fals…","frontmatter":{"title":"Change orientation a specific viewController","path":null,"date":null},"id":"10c9fd4f-79e3-5bd8-8e11-0d83fdda90e4"}},{"node":{"excerpt":"cert, key 파일을 동시에 export (암호없이) 해서 p12를 pem으로 변환 해당 pem으로 접속 테스트 한 후, pem파일을 전달하면 됨.","frontmatter":{"title":"AWS용 APNS인증서 만들기","path":null,"date":null},"id":"c7d2206b-48e8-58c0-944f-49861e38549b"}},{"node":{"excerpt":"debuggingtipsand_tricks.pdf","frontmatter":{"title":"Debugging Tips and Tricks - WWDC16","path":null,"date":null},"id":"ab74ceac-ecd9-5ca1-aa7f-66f6d9e84678"}},{"node":{"excerpt":"About Async https://github.com/google/promises Promises is a modern framework that provides a synchronization construct for Swift and Objective-C. https://github.com/Restofire/Restofire\\nRestofire is …","frontmatter":{"title":"Need to check Opensources","path":null,"date":null},"id":"59513f38-b932-540c-b857-356c470b536a"}},{"node":{"excerpt":"session710__privacysupportiniosandos_x.pdf","frontmatter":{"title":"Privacy support in iOS and OS X","path":null,"date":null},"id":"f2fab0f1-0c30-50c6-b2c8-25d8f23a6dfe"}},{"node":{"excerpt":"Build settings reference Sample Codes gist","frontmatter":{"title":"XCode build settings, variables","path":null,"date":null},"id":"110850e1-d57c-54af-b648-a66e4b78c9bc"}},{"node":{"excerpt":"realm file in simulator\\nfile:///Users/hslee/Library/Developer/CoreSimulator/Devices/10945933-63A7-4C2E-875B-7023A6820B39/data/Containers/Data/Application/1EEB0045-4451-4238-B887-38AFC3D1256F/Document…","frontmatter":{"title":"Realm debug snippet","path":null,"date":null},"id":"1ac5070c-89d1-54b1-8361-39e7c4f560c2"}},{"node":{"excerpt":"Add below script to script on build phases","frontmatter":{"title":"Crashlytics - resolve \\"missing dSymbols\\" by build script","path":null,"date":null},"id":"d89d7d6f-7c31-5bb8-a945-8a46d10add17"}},{"node":{"excerpt":"** XIB의 뷰 상위뷰에서 Autolayout 적용 방법 XIB view view.translatesAutoresizingMaskIntoConstraints = true super view add constaint with child view","frontmatter":{"title":"XIB의 뷰 상위뷰에서 Autolayout 적용 방법","path":null,"date":null},"id":"726d2142-3194-5b97-a608-f5198aa6f11d"}},{"node":{"excerpt":"atomic links Atomic Properties in Swift interesting links Benchmarking Swift Locking APIs","frontmatter":{"title":"Atomic links","path":null,"date":null},"id":"3aa9ddec-6282-5bd8-8b26-4c3ad755b8d2"}},{"node":{"excerpt":"SOLID - Programming Principles SRP 단일 책임 원칙 (Single responsibility principle) OCP 개방-폐쇄 원칙 (Open/closed principle) LSP 리스코프 치환 원칙 (Liskov substitution principle) ISP 인터페이스 분리 원칙 (Interface segregatio…","frontmatter":{"title":"SOLID - Programming Principles","path":null,"date":null},"id":"c11bdcf0-ea0e-56b7-8461-6cedbc236af8"}},{"node":{"excerpt":"Bubble Sort - Sort algorithm Overview Bubble sort는 두 인접한 원소를 검사하여 정렬하는 방법이다. 시간 복잡도가 {\\\\displaystyle O(n^{2})} O(n^{2})로 상당히 느리지만, 코드가 단순하기 때문에 자주 사용된다. 원소의 이동이 거품이 수면으로 올라오는 듯한 모습을 보이기 때문에 지어진 이름이다. …","frontmatter":{"title":"SOLID - Programming Principles","path":null,"date":null},"id":"c6817e14-7740-5a6e-985b-1e16c20f221b"}},{"node":{"excerpt":"hsleeblog new blog site by Gatsby","frontmatter":{"title":"test","path":"test","date":"2020-02-01 22:30:00"},"id":"0d34e147-3d50-5146-bfef-5eba64fbf581"}},{"node":{"excerpt":"layout: post\\ntitle: aaa\\ncomments: false\\ncategory: software\\ntags: ansible 12312312312","frontmatter":{"title":"aaa","path":"aaa","date":"2020-02-01 22:30:00"},"id":"52000d52-a514-5062-8a25-2371402ca246"}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-3b729491c9c25a635e2e.js.map