# CSS Review

Let's just take a moment to review the structure of a CSS ruleset. Recall that a CSS ruleset has the following form. (If this CSS rule is clear to you just skip to the next section!).

    h1 {
      font-family: Cambria;
      color: navy;
    }

 This CSS ruleset consists of two parts. The *selector*, `h1`, specifies what types of HTML elements the ruleset should apply to. In this case the selector, `h1`, is saying "*apply these rules to all level-1 header elements in the document*". The *rules* themselves specify what styles should be applied to elements matching the selector. In this case we have two rules - `font-family: Cambria` and `color: navy` - which together imply that all level-1 headers should have navy blue text and be in Cambria font. 

 That's it really. While you're here though, this is a good time to take careful note of the format and syntax. Notice that every line terminates with a semicolon ('`;`'), and that properties (`font-family`, `color`) are separated from values (`Cambria`, `navy`) by colons ('`:`'). Also note that the opening bracket is on the same line as the selector ('`h1 {`'), and that the rules are indented one tab-space from the selector and the closing bracket. You should try very hard to emulate this style when writing your own CSS.