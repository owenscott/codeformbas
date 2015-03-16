Refactoring

Refactoring code means improving the quality of the code's implementation without altering its function. In the context of CSS this could mean shortening a CSS file and making its structure more clear, without actually altering the appearance of the webpage. Refactoring is one of the most undervalued parts of software engineering, from the perspective of non-technical managers, because even while the work is important, its results are not visible. There are several key principals to refactoring:

## Don't Repeat Yourself (DRY)

One of the simplest but most important principles of software engineering is DRY: don't repeat yourself. It is a critical component of good code design that everything be specified in one place, and one place only. For instance, take the following CSS snippet:

    p {
      font-size: 16px;
    }

    p.warning {
      color: red;
      font-size: 16px;
    }

This seems reasonable. We are saying that a paragraph should have a font-size of 16px and also that when a paragraph has the class `.important` it should have red text and also a font-size of 16px. However, the second `font-size: 16px` is redundant. We could accomplish the same thing with the following code:

    p {
      font-size: 16px;
    }

    p.warning {
      color: red;
    }

Now if we need to change the font-size for the paragraphs we only need to make one change instead of two. This makes it easier to maintain our code in the future.

## Modularization

asdf

## Testing

asdf

