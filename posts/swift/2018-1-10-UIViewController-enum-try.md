---
layout: post
title: UIViewController enum samples
description: UIViewController enum samples
category: swift
tags: [swift]
date: "2018-01-10"
---

{% highlight swift %}

enum RDUXCatalogs: BSTUXProtocol {
    case screens(UIViewController)
    case device(UIViewController)

    enum Screens {

        case main(Main)
        case device(Device)
        case common(Common)

        enum Main: UIViewController {
            typealias RawValue = UIViewController

            case intro

            init?(rawValue: RawValue) {
                self = type(of: rawValue).init(coder: coder)
            }
          }
    }
}

{% endhighlight %}
